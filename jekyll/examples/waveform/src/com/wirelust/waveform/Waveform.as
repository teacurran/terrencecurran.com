package com.wirelust.waveform {
	import flash.display.*;
	import flash.events.*;
	import flash.geom.Matrix;
	
	import mx.core.*;
	import mx.graphics.IFill;
	import mx.graphics.IStroke;
	import mx.graphics.SolidColor;
	import mx.graphics.Stroke;
	
	public class Waveform extends UIComponent {
		private var levels:Array = new Array();
		public var color:uint = 0x000000;
		public var borderColor:uint = 0xCCCCCC;
		public var borderWidth:uint = 1;
		public var autoScale:Boolean = true;
		
		public function Waveform() {
		}
		
		public function add(level:Number):void {
			// trim the levels so we don't keep eating up memory
			while(levels.length > this.width) {
				levels.shift();
			}
			levels.push(level);
		}
		
		override protected function updateDisplayList(param1:Number, param2:Number) : void {
			var scaleFactor:Number = 1;
			// autoscale will find the highest volume and scale all lines in the display accordingly.
			if (autoScale) {
				var highestLevel:Number = 0;
				for (var i:uint=0; i<levels.length; i++) {
					if (levels[i] > highestLevel) {
						highestLevel = levels[i];
					}
				}
				scaleFactor = height/2/highestLevel;
			}

			super.updateDisplayList(param1, param2);
			graphics.clear();
			graphics.lineStyle(1, color, 1, true, LineScaleMode.NORMAL);
			var lineX:uint = 0;
			for (var j:uint=0; j<levels.length; j++) {
				graphics.moveTo(lineX, this.height/2 - (levels[j] * scaleFactor));
				graphics.lineTo(lineX, this.height/2 + (levels[j] * scaleFactor));
				lineX++;
			}
			
			if (borderWidth > 0) {
				graphics.lineStyle(borderWidth, borderColor, 1, true, LineScaleMode.NORMAL);
				graphics.drawRect(0, 0, this.width, this.height);
			}
		}
	}
}
package com.approachingpi.wirelust.examples;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.PageSize;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfWriter;
import com.lowagie.text.pdf.PdfContentByte;
import com.lowagie.text.pdf.PdfTemplate;
import com.lowagie.text.pdf.DefaultFontMapper;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletOutputStream;
import javax.servlet.ServletException;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.awt.*;
import java.awt.geom.Rectangle2D;

import org.jfree.data.category.DefaultCategoryDataset;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.title.TextTitle;
import org.jfree.chart.plot.PlotOrientation;

/**
 * Approaching Pi, Inc.
 * http://www.approachingpi.com
 * <p/>
 * User: tcurran
 * Date: Mar 17, 2008
 * Time: 2:29:43 AM
 * Desc:
 */
public class GenerateJfreePdf extends HttpServlet {

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        doPost(req,res);
    }

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        ByteArrayOutputStream baosPDF = null;

        try {
            baosPDF = generatePdf(req, this.getServletContext());
        } catch (Exception e) {
            e.printStackTrace();
        }


        String fileName = "itextpdf.pdf";

        res.setHeader("Cache-Control", "max-age=30");   // 30 seconds
        res.setContentType("application/pdf");
        res.setHeader("Content-disposition", "inline; filename=" + fileName);

        ServletOutputStream sos;
        sos = res.getOutputStream();
        
        try {
            baosPDF.writeTo(sos);
        } catch (NullPointerException npe) {
            // do nothing
            npe.printStackTrace();
        }
        sos.flush();
    }

    protected ByteArrayOutputStream generatePdf(final HttpServletRequest req, final javax.servlet.ServletContext ctx) throws DocumentException {

        Document doc = new Document();

        ByteArrayOutputStream baosPDF = new ByteArrayOutputStream();
        PdfWriter docWriter = null;

        try     {

            docWriter = PdfWriter.getInstance(doc, baosPDF);

            doc.addProducer();
            doc.addCreator(this.getClass().getName());
            doc.addTitle("jfreechart pdf");
            doc.setPageSize(PageSize.LETTER);

            doc.open();

            // add some text
            doc.add(new Phrase("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));

            // generate a chart
            XYSeriesCollection dataset = new XYSeriesCollection();

            XYSeries series = new XYSeries("XYGraph");
            series.add(1, 1);
            series.add(2, 3);
            series.add(3, 9);
            series.add(4, 11);

            dataset.addSeries(series);
            JFreeChart chart = ChartFactory.createXYLineChart("XY Chart Sample, non default font", // chart title
                    "x-axis",   // domain axis label
                    "y-axis",   // range axis label
                    dataset,    // data
                    PlotOrientation.VERTICAL,   // orientation
                    true,   // include legend
                    true,   // tooltips
                    false   // urls
                );

            // trick to change the default font of the chart
            chart.setTitle(new TextTitle("XY Chart Sample, non default font", new java.awt.Font("Serif", Font.BOLD, 12)));
            chart.setBackgroundPaint(Color.white);
            chart.setBorderPaint(Color.black);
            chart.setBorderStroke(new BasicStroke(1));
            chart.setBorderVisible(true);

            int width = 260;
            int height = 250;

            // get the direct pdf content
            PdfContentByte dc = docWriter.getDirectContent();

            // get a pdf template from teh direct content
            PdfTemplate tp = dc.createTemplate(width, height);

            // create an AWT renderer from the pdf template
            Graphics2D g2 = tp.createGraphics(width, height, new DefaultFontMapper() );
            Rectangle2D r2D = new Rectangle2D.Double(0,0, width,height);
            chart.draw(g2,r2D,null);
            g2.dispose();


            // add the rendered pdf template to the direct content
            // you will have to play around with this because the chart is absolutely positioned.
            // 38 is just a typical left margin
            // docWriter.getVerticalPosition(true) will approximate the position that the content above the chart ended
            dc.addTemplate(tp, 38, docWriter.getVerticalPosition(true)-height);

        } catch (DocumentException dex) {
            baosPDF.reset();
            dex.printStackTrace();
            throw new DocumentException(dex);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (doc != null && doc.isOpen()) {
                doc.close();
            }
            if (docWriter != null) {
                docWriter.close();
            }
        }

        if (baosPDF.size() < 1) {
            throw new DocumentException("document has "     + baosPDF.size() + " bytes");
        }
        return baosPDF;
    }
}

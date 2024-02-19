import java.awt.Desktop;
import java.net.URI;
import java.io.IOException;
import java.io.File;
import java.util.Scanner;
import java.net.URL;
import java.net.http.HttpClient;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 * A tool which returns search results from a browser based on Strings.
 *
 * @author Dillan R. Victory
 * @version no.1 (Oct, 2022)
 */
public class searchString
{
    private String searchInput;

    /**
     * Constructor for objects of class searchString
     */
    public searchString()
    {
        searchInput = "red";
        System.out.println("\f");
    }

    public static void main(String[] args) {
        //input line reader
        Scanner input = new Scanner(System.in);
        System.out.println("What would you like to search? \n");
        String searchQuery = input.next();
        //printGoogleSearch(searchQuery);

        printTranslation(searchQuery);
    }

    /**
     * Enter a String URL without "http:www."
     * It will open in the default browser.
     */
    public void main(String URL)
    {
        try {
            URI uri= new URI("http:www." + URL);
            System.out.println("http:www." + URL);
            java.awt.Desktop.getDesktop().browse(uri);
            System.out.println("Web page opened in browser");
        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Take a String search and Print a GOOGLE Search of the given search.
     *
     */
    public static void printGoogleSearch(String search)
    {
        try {
            search = search.replaceAll(" ", "+").toLowerCase();
            search = search.trim();
            //System.out.println(search);

            Document doc = Jsoup.connect("https://www.google.com/search?q=" + search).get();

            Elements headings = doc.select("h3");
            for(Element h3 : headings) {
                // System.out.println(h3.text());
                Element link = h3.parent();
                // System.out.println(link.text());
                Elements siblings = link.children();
                for(Element child : siblings) {
                    System.out.println(child.text());

                }
            }

        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Take a String search and Print a Translation Search of the given search.
     * Scraped from a translation Website //(jishow.org)
     */
    public static void printTranslation(String search)
    {
        try {
            search = search.replaceAll(" ", "+").toLowerCase();
            search = search.trim();
            //System.out.println(search);

            Document doc = Jsoup.connect("https://jisho.org/search/" + search).get();

            Elements headings = doc.select("#main_results");
            for(Element portion : headings) {
                // System.out.println(h3.text());
                Element link = portion.parent();
                // System.out.println(link.text());
                Elements siblings = link.children();
                for(Element child : siblings) {
                    System.out.println(child.text());

                }
            }

        }catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * Take a String search and do a GOOGLE Search of the given search.
     *
     */
    public void googleSearch(String search)
    {
        try {
            search = search.replaceAll(" ", "+").toLowerCase();
            search = search.trim();
            System.out.println(search);
            URI uri= new URI("https://www.google.com/search?q=" + search);
            //System.out.println("http:www." + URL);
            java.awt.Desktop.getDesktop().browse(uri);
            System.out.println("Web page opened in browser");

            //if(search.contains(" ")){

            //}

            //https://www.google.com/search?q=what+is+the+weather
        }catch (Exception e) {
            e.printStackTrace();
        }
    }
}

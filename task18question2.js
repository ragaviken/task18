import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DragAndDropExample {
    public static void main(String[] args) {
        // Set the path to chromedriver.exe
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver.exe");

        // Initialize ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Open the browser and navigate to the jQuery UI droppable website
        driver.get("https://jqueryui.com/droppable/");

        // Switch to the frame containing the draggable elements
        driver.switchTo().frame(driver.findElement(By.className("demo-frame")));

        // Find the source element
        WebElement source = driver.findElement(By.id("draggable"));

        // Find the target element
        WebElement target = driver.findElement(By.id("droppable"));

        // Perform drag and drop operation
        Actions actions = new Actions(driver);
        actions.dragAndDrop(source, target).build().perform();

        // Verify the color property of the target element's CSS
        String targetColor = target.getCssValue("background-color");
        System.out.println("Color of target after drop: " + targetColor);

        // Verify the text of the target element
        String targetText = target.getText();
        if (targetText.equals("Dropped!")) {
            System.out.println("Text of target after drop: " + targetText);
        } else {
            System.out.println("Text of target not changed or incorrect");
        }

        // Close the browser
        driver.quit();
    }
}

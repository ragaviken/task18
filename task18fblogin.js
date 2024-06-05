import org.openqa.selenium.By;
 import org.openqa.selenium.WebDriver;
 import org.openqa.selenium.WebElement;
 import org.openqa.selenium.chrome.ChromeDriver;
 import org.openqa.selenium.support.ui.Select;

 public class FacebookSignup {
     public static void main(String[] args) {
         // Set the path to the ChromeDriver executable
     	System.setProperty("webdriver.Chrome.driver",
 				"C:\\Users\\Ragha\\Drivers\\chromedriver.exe");

         // Launching the Chrome browser
                 WebDriver driver = new ChromeDriver();

                 driver.manage().window().maximize();

                 // Navigate to the Facebook signup page
                 driver.get("https://www.facebook.com/");

                 // Finding the elements

                 WebElement createbtn = driver.findElement(By.xpath("//a[@data-testid=\"open-registration-form-button\"]"));
                 createbtn.click();
                 WebElement mobileOrEmail = driver.findElement(By.xpath("//input[@aria-label=\"Mobile number or email address\"]"));
                 WebElement newPassword = driver.findElement(By.xpath("//input[@id=\"password_step_input\"]"));
                 WebElement firstName = driver.findElement(By.name("firstname"));
                 WebElement lastName = driver.findElement(By.name("lastname"));
                 WebElement day = driver.findElement(By.name("birthday_day"));
                 WebElement month = driver.findElement(By.name("birthday_month"));
                 WebElement year = driver.findElement(By.name("birthday_year"));
                 WebElement gender = driver.findElement(By.xpath("//input[@value='2']")); // For Female gender option
                 WebElement signUpButton = driver.findElement(By.name("websubmit"));

                 // Entering values in the respective fields
                 mobileOrEmail.sendKeys("your-email@example.com");
                 newPassword.sendKeys("your-password");
                 firstName.sendKeys("YourFirstName");
                 lastName.sendKeys("YourLastName");

                 // Select date of birth in dropdowns
                 Select selectDay = new Select(day);
                 selectDay.selectByValue("4"); // For 4th day

                 Select selectMonth = new Select(month);
                 selectMonth.selectByValue("6"); // For June

                 Select selectYear = new Select(year);
                 selectYear.selectByValue("2024"); // For 2024

                 // Select gender
                 gender.click();

                 // Click the Sign Up button
                 signUpButton.click();

     }

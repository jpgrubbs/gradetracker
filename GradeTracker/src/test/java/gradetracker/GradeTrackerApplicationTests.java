package gradetracker;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.gradetracker.GradeTrackerApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = GradeTrackerApplication.class)
@WebAppConfiguration
public class GradeTrackerApplicationTests {

	@Test
	public void contextLoads() {
	}

}

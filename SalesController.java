package test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SalesController {
@RequestMapping("/")
public ModelAndView home() {
	ModelAndView mav = new ModelAndView("index");
	mav.addObject("message","Hello from Spring MVC");
	return mav;
}
}

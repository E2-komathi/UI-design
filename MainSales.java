package TaskLast.controller;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class MainSales {
	@RequestMapping("/run")
	public @ResponseBody String db()
	{
		SessionFactory sessionFactory = new Configuration()
				.configure("hibernate.cfg.xml")
	            .buildSessionFactory();
		Session session = sessionFactory.openSession();


		List<Sale> users = session.createCriteria(Sale.class).list();
		System.out.println("user list"+users);
		return users.toString();

		
	}
	
}

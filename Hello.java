package spring1st;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Hello {

	public static void main(String[] args)
	{
		ApplicationContext ac = new ClassPathXmlApplicationContext("SpringConfig.xml");
        Sample sa =(Sample) ac.getBean("hw");
        sa.m1();
		
	}

}

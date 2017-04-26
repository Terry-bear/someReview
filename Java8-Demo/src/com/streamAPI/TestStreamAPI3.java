package com.streamAPI;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.junit.Test;

import com.streamAPI.Student.Status;

/*
 * 终止操作
 */
public class TestStreamAPI3 {
	/*
	 * 查找与匹配
	 *allMath--- 检查是否匹配所有元素
	 *anyMatch--- 检查是否至少匹配一个元素
	 *noneMatch--- 检查是否没有匹配所有元素
	 *findFirst--- 返回第一个元素
	 *findAny--- 返回当前流中的任意元素
	 *count--- 返回流中元素的总数
	 *max--- 返回流中最大值
	 *min--- 返回流中最小值
	 */
	
	List<Student> students = Arrays.asList(
			new Student("tony", 22, 4500.00,Status.BUSY),
			new Student("tom" , 23, 3500.00,Status.FREE),
			new Student("linda", 20, 1800.00,Status.VOCATION),
			new Student("jolie", 25, 7000.00,Status.BUSY)
			
		);
	
	@Test
	public void test1(){
		boolean b1 = students.stream()
				.allMatch((s) -> s.getStatus().equals(Status.BUSY));
		System.out.println(b1);
		boolean b2 = students.stream()
				.anyMatch((s) -> s.getStatus().equals(Status.BUSY));
		System.out.println(b2);
		boolean b3 = students.stream()
				.noneMatch((s) -> s.getStatus().equals(Status.BUSY));
		System.out.println(b3);
		
		Optional<Student> op1 = students.stream()
				.sorted((s1,s2) -> Double.compare(s1.getSalary(), s2.getSalary()))
				.findFirst();
		
		//Optional里面有个方法orElse来防止空指针异常
		//op1.orElse(other);
	}
	
	@Test
	public void test2(){
		long count = students.stream()
				.count();
		System.out.println(count);

		//查询最高工资的学生对象
		Optional<Student> max = students.stream()
				.max((s1,s2) -> Double.compare(s1.getSalary(), s2.getSalary()));
		System.out.println(max);
		
		//查询最低工资的值
		Optional<Double> min = students.stream()
				.map(Student::getSalary)
				.min(Double::compareTo);
		System.out.println(min.get());
	}
	
}

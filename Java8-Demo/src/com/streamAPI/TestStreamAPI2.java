package com.streamAPI;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

import org.junit.Test;

public class TestStreamAPI2 {
	//-----中间操作-----
	//--->中间操作的步骤也满足延迟加载，只有执行了终止操作才执行
	
	List<Student> students = Arrays.asList(
		new Student("tony", 22, 4500.00),
		new Student("tom" , 23, 3500.00),
		new Student("linda", 20, 1800.00),
		new Student("jolie", 25, 7000.00),
		new Student("jolie", 25, 7000.00)
		
	);
	
	//筛选与切片
	
	//①filter---接受Lambda并且过滤元素
	@Test
	public void test1(){
		Stream<Student> stream = students.stream()
				.filter((s) -> {
					System.out.println("-执-行-了-中-间-操-作！");
					return s.getSalary()>3500.00;
				});
		//终止操作：用于触发中间操作
		//内部迭代：由StreamAPI自己迭代而不需要我们去迭代
		stream.forEach(System.out::println);
	}
	
		//外部迭代
	@Test
	public void test2(){
		Iterator<Student> it = students.iterator();
		while(it.hasNext()){
			System.out.println(it.next());
		}
	}
	
	//②limit---截断流，限制元素个数
	@Test
	public void test3(){
		students.stream()
				.filter((s) -> {
					System.out.println("短路！");
					return s.getAge() > 20;
				})
				.limit(1)
				.forEach(System.out::println);
	}
	
	//③skip---与limit互补，跳过指定的个数元素
	@Test
	public void test4(){
		students.stream()
				.filter((s) -> s.getSalary()>5000.00)
				.skip(1)
				.forEach(System.out::println);
	}
	
	//④distinct---筛选，通过流所生成元素的hashCode()和equals()去除重复元素，在实例对象中要重写这两个方法
	@Test
	public void test5(){
		students.stream()
				.filter((s) -> s.getSalary()>3500.00)
				.distinct()
				.forEach(System.out::println);
	}
	
	/*映射
	 * map---接受Lambda，将元素转换成其他形式或提取信息。接受一个函数作为参数，
	 * 该函数会被应用到每个元素上，并将其映射成一个新的元素。
	 * flatMap---接受一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流链接成一个流
	 */
	@Test
	public void test6(){
		students.stream()
//				.map((s) -> s.getName())
				.map(Student::getName)
				.forEach(System.out::println);
		System.out.println("------------------------------------");
		//此方法类似集合中的add()和addAll()
		List<String> list = Arrays.asList("aa","bb","cc","dd","ee");
		Stream<Stream<Character>> map = list.stream()
				.map(TestStreamAPI2::filterCharacter);//{{a,a},{b,b}}
		map.forEach((m) -> {
			m.forEach(System.out::println);
		});
		System.out.println("------------------------------------");

		Stream<Character> flatMap = list.stream()
			.flatMap(TestStreamAPI2::filterCharacter);//{a,a,b,b}
		flatMap.forEach(System.out::println);
	}
	
	public static Stream<Character> filterCharacter(String str){
		List<Character> list = new ArrayList<>();
		for (Character ch : str.toCharArray()) {
			list.add(ch);
		}
		return list.stream();
	}
	
	/*排序
	 * sorted()---自然排序---按照对象的(comparable)
	 * sorted(Comparator com)---定制排序---按照(Comparator)
	 */
	@Test
	public void test7(){
		List<String> list = Arrays.asList("ff","yy","gg","uu","ii");
		list.stream()
			.sorted()
			.forEach(System.out::println);
		System.out.println("------------------------------------");
		
	}

}

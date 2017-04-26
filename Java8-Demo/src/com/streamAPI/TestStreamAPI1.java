package com.streamAPI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.junit.Test;
/*
 * 一.Stream的三个操作步骤：
 * 	1.创建Stream
 * 	2.中间操作
 * 	3.终止操作(终端操作)
 */
public class TestStreamAPI1 {
	//------创建Stream-----
	@Test
	public void test1(){
		//1.可以通过Collection系列集合提供的
		//		stream()串行流
		//		parallelStream()并行流
		List<String> list = new ArrayList<>();
		Stream<String> stream1 = list.stream();
		
		//2.通过Arrays中的静态方法stream()获取数组流
		Student[] stus = new Student[10];
		Stream<Student> stream2 = Arrays.stream(stus);
		
		//3.通过Stream类中的静态方法of()--->里面是可变参数
		Stream<String> stream3 = Stream.of("tony","tom","linda");
		
		//4.创建无限流
		//①迭代,iterate里面第一个参数是一个种子数--->起始值，第二个参数是一个一元表达式Lambda
		Stream<Integer> stream4 = Stream.iterate(0, (x) -> x + 2);
		stream4.limit(23).forEach(System.out::println);
		
		//②生成
		Stream.generate(() -> Math.random())
			  .limit(23)
			  .forEach(System.out::println);
		
	}
}

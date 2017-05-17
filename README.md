# java8
--this is a java8 demo
写了一些关于java8新内容的demo
包括Lambda表达式、StreamAPI、Optional容器类、新时间和日期的API

1. Lambda表达式
2. 函数式接口
3. 方法引用于构造器引用
4. Stream API
5. 接口中的默认方法与静态方法
6. 新时间日期API
7. 其他小功能
为什么使用Lambda表达式
* Lambda是一个匿名函数，我们可以把Lambda表达式理解为是一段可以传递的代码(将代码像数据一样进行传递)。
* Lambda表达式引入操作符”->”
    * 左侧：制定了Lambda表达式需要的所有参数
    * 右侧：制定了Lambda体，即Lambda表达式要执行的功能

#### Lambda表达式语法
* 语法一：无参，无返回值，Lambda体只需要一条语句

```
Runnable r1 = () -> System.out.println(“Hello Lambda!");
```

* 语法二：Lambda需要一个参数

```
Consumer<String> fun = (args) -> System.out.println(args); 
```

* 语法三：Lambda只需要一个参数时，参数的小括号可以省略

```
Consumer<String> fun = args -> System.out.println(args);
```

* 语法四：Lambda需要两个参数，并且有返回值
* 

```
BinaryOperator<Long> bo = (x, y) ->{
System.out.println("实现函数接口方法!”）;
Return x + y;
};
```

* 语法五：当Lambda体只有一条语句时，return与大括号可以省略
* 

```
BinaryOperator<Long> bo = (x + y) -> x + y;
```

* 语法六：数据类型可以省略，因为可由编译器推断得出，称为”类型推断”
* 

```
BinaryOperator<Long> bo = (Long x, Long y) -> {
System.out.println("实现函数接口方法!”);
return x + y;
};
```

#### 类型推断
Lambda表达式中无需指定类型，程序依然可以编译，这是因为javac根据程序的上下文，在后台推断出了参数的类型。Lambda表达式的类型依赖于上下文环境，是由编译器推断出来的。这就是所谓的”类型推断”。
##### 什么是函数式接口
* 只包含一个抽象方法的接口，称为函数式接口
* 通过Lambda表达式来创建该接口的对象。（若Lambda表达式抛出一个受检异常，name该异常需要在目标接口的抽象方法上进行声明）
* 可以在任意函数式接口上使用@FunctionalInterface注解，这样做可以检查它是否是一个函数式接口。同时，javadoc也会包含一条声明，说明这个接口是一个函数式接口
* 


作为参数传递Lambda表达式
 

```
   Public String toUpperString(MyFunc<String> mf, String str){
        return mf.getValue(str);    
    }
```

#### java内置四大核心函数式接口
|函数式接口                  | 参数类型 | 返回类型 | 用途|
| ------------------------ |:-------:| -------:|---:|
|   Consumer<T>消费型接口    |   T     |   void  |对类型为T的对象应用操作，包含方法:void  accept(T t)|
|    Supplier<T>供给型接口   | 无      |   T     |返回类型为T的对象，包含方法:T get();|
|   Function<T, R>函数型接口 | T       |   R     |对类型为T的对象应用操作，并返回结果。结果是R类型的对象。包含方法：R apply(T t);|
|   Predicate<T>断定型接口   |T        |  boolean|确定类型为T的对象是否满足某约束，并返回boolean值。包含方法：boolean test(T t);|



方法引用与构造器引用
方法引用
当要传递给Lambda体的操作，已经有实现的方法了，可以使用方法引用！
（实现抽象方法的参数列表，必须与方法引用方法的参数列表保持一致！）
方法引用：使用操作符”：：“将方法名和对象或类的名字分割开来。
如下三种主要使用情况：
* 对象：：实例方法
* 类：：静态方法
* 类：：实例方法

E.g 1:
 

```
   (x) -> System.out.println(x);
Equals 
    System.out::println;
```

E.g2:

```
    BinaryOperator<Double> bo = (x, y) -> Math.pow(x, y);
Equals
    BinaryOperator<Double> bo = Math::pow;
```

E.g3:

```
    compare((x, y) -> x.equals(y0, “abcdef”, “abcdef”);
Equals
    compare(String::equals, “abc”, “abc”);
```

Tips:当需要引用方法的第一个参数是调用对象，并且第二个参数是需要引用方法的第二个参数（或无参数）时： ClassName::methodName

构造器引用
格式： ClassName：：new
与函数式接口相结合，自动与函数式接口中方法兼容。可以把构造器引用赋值给定义的方法，与构造器参数列表要与接口中抽象方法的参数列表一致！
E.g1:
   

```
 Function<Integer, MyClass> fun = (n) -> new MyClass(n);
Equals
    Function<Integer, MyClass> fun = MyClass::new;
```

格式： type[ ]::new
E.g2:
 

```
   Function<Integer, Integer[ ]> fun = (n ) -> new Integer[n];
Equals
    Function<Integer, Integer[ ]> fun = Integer[ ]::new;
```



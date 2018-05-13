package main

import "fmt"

// 定义变量
func variableZeroVarlue() {
	var a int
	var s string
	fmt.Printf("%d %q\n",a, s)
}

// 定义变量初始值
func variableInitialValue() {
	var a int = 3
	var s string = "haha"
	fmt.Println(a, s)
}

// 让go自己判断类型
func variableType() {
	var a, b, c = 1, "hehe", true
	fmt.Println(a, b, c)
}

// 简写变量赋值
func variableShort() {
	a, b, c, d:= 1, 2, 3, 4
	fmt.Println(a, b, c, d)
}
func main() {
	fmt.Println("hello go world~")
	variableZeroVarlue()
	variableInitialValue()
	variableType()
	variableShort()
}

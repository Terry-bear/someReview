package main

import (
	"math/cmplx"
	"fmt"
	"math"
)

// 内建变量类型
// bool, string
// int, int8, int32, int64, uintptr
// btye, rune-->char类型,32位
// float32, float64, complex64, complex128-->复数
// 复数中i = √ -1 

// 欧拉公式
func eular() {
	c := 3 + 4i
	fmt.Println(cmplx.Abs(c))
	fmt.Printf("%.3f\n",
		cmplx.Exp(1i*math.Pi)+1)

}

func triangle() {
	var a, b int = 3, 4
	fmt.Println(calcTriangle(a, b))
}

func calcTriangle(a, b int) int {
	var c int
	c = int(math.Sqrt(float64(a*a + b*b)))
	return c
}

func consts() {
	const (
		filename = "abc.txt"
		a, b     = 3, 4
	)
	var c int
	c = int(math.Sqrt(a*a + b*b))
	fmt.Println(filename, c)
}

func enums() {
	const (
		cpp = iota
		_
		python
		golang
		javascript
	)

	const (
		b = 1 << (10 * iota)
		kb
		mb
		gb
		tb
		pb
	)

	fmt.Println(cpp, javascript, python, golang)
	fmt.Println(b, kb, mb, gb, tb, pb)
}

func main() {
	eular()
	triangle()
	consts()
	enums()
}

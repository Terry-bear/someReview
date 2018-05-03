# sass 核心用法总结
### 基本用法和规则
	1. 编码
		为了避免潜在的字符编码问题，强力建议在入口文件中通过 @charset 指令使用 UTF-8 编码格式。
		```
		@charset 'utf-8';
		```
	2. url 
		最好用引号包裹起来
		```
		.foo {
			background-image: url('/images/kittens.jpg');
		}
		```
	3. 单位
		将一个单位添加给数字的时候，实际上是让该数值乘以1个单位
		```
		$value: 42;
		$length: $value * 1px;
		```
	4. 计算
		最高级运算应该始终被包裹在括号中
		```
		.foo{
			width: (100% / 3)
		}
		```
	5. 颜色格式
		我建议颜色格式要按照以下顺序排列：
			HSL 值;
			RGB 值;
			十六进制（使用小写并尽可能简写）
	```
	// HSL
	.foo{
		color: hsl(0, 50%, 30%)
	}

	// RGB
	.foo{
		color: rgb(255, 0, 0)
	}

	// Meh
	.foo{
		color: #f00
	}
	```

### sass核心语法

	1. 颜色和变量
		```
		$sass-pink: hsl(330, 50%, 50%)
		```
	2. 

### css 规则集
	1. 相关联的选择器写在同一行,不相关联的选择器换行
	```
	// Yep
	.foo, .foo-bar,
	.baz {
	display: block;
	overflow: hidden;
	margin: 0 auto;
	}

	// Nope
	.foo,
	.foo-bar, .baz {
		display: block;
		overflow: hidden;
		margin: 0 auto }
	```
	2. 规范的sass文件夹风格
		abstracts/
		base/
		components/
		layout/
		pages/
		themes/
		vendors/

	```
	sass/
	|
	|– abstracts/
	|   |– _variables.scss    # Sass Variables
	|   |– _functions.scss    # Sass Functions
	|   |– _mixins.scss       # Sass Mixins
	|   |– _placeholders.scss # Sass Placeholders
	|
	|– base/
	|   |– _reset.scss        # Reset/normalize
	|   |– _typography.scss   # Typography rules
	|   …                     # Etc.
	|
	|– components/
	|   |– _buttons.scss      # Buttons
	|   |– _carousel.scss     # Carousel
	|   |– _cover.scss        # Cover
	|   |– _dropdown.scss     # Dropdown
	|   …                     # Etc.
	|
	|– layout/
	|   |– _navigation.scss   # Navigation
	|   |– _grid.scss         # Grid system
	|   |– _header.scss       # Header
	|   |– _footer.scss       # Footer
	|   |– _sidebar.scss      # Sidebar
	|   |– _forms.scss        # Forms
	|   …                     # Etc.
	|
	|– pages/
	|   |– _home.scss         # Home specific styles
	|   |– _contact.scss      # Contact specific styles
	|   …                     # Etc.
	|
	|– themes/
	|   |– _theme.scss        # Default theme
	|   |– _admin.scss        # Admin theme
	|   …                     # Etc.
	|
	|– vendors/
	|   |– _bootstrap.scss    # Bootstrap
	|   |– _jquery-ui.scss    # jQuery UI
	|   …                     # Etc.
	|
	`– main.scss              # Main Sass file
	```
	
	BASE文件夹
		base/文件夹存放项目中的模板文件。在这里，可以找到重置文件、排版规范文件或者一个样式表——定义一些 HTML 元素公认的标准样式（我喜欢命名为_base.scss）。
		_base.scss
		_reset.scss
		_typography.scss
		---如果你的项目中使用了大量的 CSS 动画, 那么你有必要考虑添加一个 \_animations.scss 文件来统一管理这些动画。如果只是偶尔使用一些动画，也可以将这些动画融入到调用它们的文件中。

	LAYOUT文件夹
		layout/ 文件夹存放构建网站或者应用程序使用到的布局部分。该文件夹存放网站主体（头部、尾部、导航栏、侧边栏…）的样式表、栅格系统甚至是所有表单的 CSS 样式。
		_grid.scss
		_header.scss
		_footer.scss
		_sidebar.scss
		_forms.scss
		_navigation.scss
		---layout/ 文件夹也会被称为 partials/, 具体使用情况取决于个人喜好。

	COMPONENTS文件夹
		对于小型组件来说，有一个 components/ 文件夹来存放。相对于 layout/ 的宏观（定义全局线框结构），components/ 更专注于局部组件。该文件夹包含各类具体模块，基本上是所有的独立模块，比如一个滑块、一个加载块、一个部件……由于整个网站或应用程序主要由微型模块构成，components/ 中往往有大量文件。
		_media.scss
		_carousel.scss
		_thumbnails.scss
		---components/ 文件夹也会被称为 modules/, 具体使用情况取决于个人喜好。

	PAGES文件夹
		如果页面有特定的样式，最好将该样式文件放进 pages/ 文件夹并用页面名字。例如，主页通常具有独特的样式，因此可以在 pages/ 下包含一个 _home.scss 以实现需求。
		_home.scss
		_contact.scss
		---取决于各自的开发流程，这些文件可以使用你自己的前缀命名，避免在最终样式表中与他人的样式表发生合并。一切完全取决于你。

	THEMES文件夹
		在大型网站和应用程序中，往往有多种主题。虽有多种方式管理这些主题，但是我个人更喜欢把它们存放在 themes/ 文件夹中。
		_theme.scss
		_admin.scss
		---这个文件夹与项目的具体实现有密切关系，并且在许多项目中是并不存在的。

	ABSTRACTS 文件夹
		abstracts/ 文件夹包含了整个项目中使用到的 Sass 辅助工具，这里存放着每一个全局变量、函数、混合宏和占位符。
		该文件夹的经验法则是，编译后这里不应该输出任何 CSS，单纯的只是一些 Sass 辅助工具。
		_variables.scss
		_mixins.scss
		_functions.scss
		_placeholders.scss
		---当项目体量庞大工具复杂时，通过主题而不是类型分类整理可能更有帮助，比如排版（_typography.scss）、主题（_theming.scss）等。每一个文件都包含所有的相关信息：变量、函数、混合宏和占位符。这样做可以让维护更加单，特别针对于文件较长的情况。
		----abstracts/ 文件夹也会被称为 helpers/ 或 utilities，具体使用情况取决于个人喜好。

	VENDORS文件夹
		最后但并非最终的是，大多数的项目都有一个 vendors/ 文件夹，用来存放所有外部库和框架（Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered……）的 CSS 文件。将这些文件放在同一个文件中是一个很好的说明方式:”嘿，这些不是我的代码，无关我的责任。”
		_normalize.scss
		_bootstrap.scss
		_jquery-ui.scss
		_select2.scss
		---如果你重写了任何库或框架的部分，建议设置第 8 个文件夹 vendors-extensions/ 来存放，并使用相同的名字命名。
		----例如，vendors-extensions/_boostrap.scss 文件存放所有重写 Bootstrap 默认 CSS 之后的 CSS 规则。这是为了避免在原库或者框架文件中进行二次编辑——显然不是好方法。

	入口文件
		主文件（通常写作 main.scss）应该是整个代码库中唯一开头不用下划线命名的 Sass 文件。除 @import 和注释外，该文件不应该包含任何其他代码。
		文件应该按照存在的位置顺序依次被引用进来：
		1. abstracts/
		2. vendors/
		3. base/
		4. layout/
		5. components/
		6. pages/
		7. themes/

	为了保持可读性，主文件应遵守如下准则：

		*每个 @import引用一个文件；
		*每个 @import单独一行；
		*从相同文件夹中引入的文件之间不用空行；
		*从不同文件夹中引入的文件之间用空行分隔；
		*忽略文件扩展名和下划线前缀。
```
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/placeholders';

@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
```

这里还有另一种引入的有效方式。令人高兴的是，它使文件更具有可读性；令人沮丧的是，更新时会有些麻烦。不管怎么说，由你决定哪一个最好，这没有任何问题。 对于这种方式，主要文件应遵守如下准则：

*每个文件夹只使用一个@import
*每个@import之后都断行
*每个文件占一行
*新的文件跟在最后的文件夹后面
*文件扩展名都可以省略

```
@import
  'abstracts/variables',
  'abstracts/functions',
  'abstracts/mixins',
  'abstracts/placeholders';

@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
```


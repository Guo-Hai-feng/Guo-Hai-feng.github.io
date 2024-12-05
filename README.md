<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>郭海枫的个人主页</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 20px 0;
            text-align: center;
        }
        header h1 {
            margin: 0;
            font-size: 2.5em;
        }
        nav {
            text-align: center;
            background-color: #333;
        }
        nav a {
            color: white;
            padding: 15px 20px;
            text-decoration: none;
            display: inline-block;
        }
        nav a:hover {
            background-color: #ddd;
            color: #333;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .section {
            margin-bottom: 40px;
        }
        .section h2 {
            text-align: center;
            color: #4CAF50;
            font-size: 2em;
            margin-bottom: 20px;
        }
        .about, .projects, .contact {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        .about div, .projects div, .contact div {
            flex: 1;
            margin: 10px;
            min-width: 250px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        footer {
            text-align: center;
            background-color: #333;
            color: white;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>

    <header>
        <h1>郭海枫的个人主页</h1>
        <p>欢迎来到我的个人网站！</p>
    </header>

    <nav>
        <a href="#about">关于我</a>
        <a href="#projects">项目展示</a>
        <a href="#contact">联系方式</a>
    </nav>

    <div class="container">
        <!-- About Me Section -->
        <section id="about" class="section">
            <h2>关于我</h2>
            <div class="about">
                <div>
                    <h3>个人简介</h3>
                    <p>你好！我叫郭海枫，是一名软件工程师。我热爱编程，喜欢探索新技术和工具。</p>
                    <p>目前我在从事web开发，特别是对前端技术如HTML, CSS, JavaScript充满兴趣。</p>
                </div>
                <div>
                    <h3>技能</h3>
                    <ul>
                        <li>编程语言：C++, Java, Python</li>
                        <li>Web 开发：HTML, CSS, JavaScript, React</li>
                        <li>数据库：MySQL, MongoDB</li>
                        <li>版本控制：Git, GitHub</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="section">
            <h2>项目展示</h2>
            <div class="projects">
                <div>
                    <h3>项目 1: 网站设计</h3>
                    <p>这是一个响应式网站模板，使用 HTML 和 CSS 编写，适合个人展示。</p>
                    <a href="https://github.com/Guo-Hai-feng/web-template" target="_blank">查看项目</a>
                </div>
                <div>
                    <h3>项目 2: 数据可视化</h3>
                    <p>该项目展示了如何通过 JavaScript 和 D3.js 创建数据可视化图表。</p>
                    <a href="https://github.com/Guo-Hai-feng/data-visualization" target="_blank">查看项目</a>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="section">
            <h2>联系方式</h2>
            <div class="contact">
                <div>
                    <h3>电子邮件</h3>
                    <p>你可以通过电子邮件与我联系：<a href="mailto:guohf@example.com">guohf@example.com</a></p>
                </div>
                <div>
                    <h3>社交媒体</h3>
                    <ul>
                        <li><a href="https://github.com/Guo-Hai-feng" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/guohai-feng" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 郭海枫. 版权所有.</p>
    </footer>

</body>
</html>


#建立学生表
CREATE TABLE student(
id INT(10)PRIMARY KEY NOT NULL AUTO_INCREMENT,
NAME VARCHAR(20) NOT NULL,
sex VARCHAR(4),
birth YEAR,
department VARCHAR(20)NOT NULL,
address VARCHAR(50)
)DEFAULT CHARSET=utf8;
#查看数据
SELECT * FROM student;
#数据（复制到SQLyog直接执行即可）
INSERT INTO student VALUES(901,'张老大','男',1990,'计算机系','北京市海淀区');
INSERT INTO student(NAME,sex,birth,department,address)VALUES
('张老二','男',1991,'中文系','北京市昌平区'),
('张三','女',1995,'中文系','湖南省永州市'),
('李四','男',1995,'英语系','辽宁省阜新市'),
('王五','女',1996,'英语系','福建省厦门市'),
('王六','男',1993,'计算机系','湖南省衡阳市');

#成绩表score建表语句（复制到SQLyog直接执行即可）：
CREATE TABLE score(
id INT(10)PRIMARY KEY NOT NULL AUTO_INCREMENT,
stu_id INT(10)NOT NULL,
c_name VARCHAR(20),
grade INT(10)
)DEFAULT CHARSET=utf8;
#数据（复制到SQLyog直接执行即可）
INSERT INTO score VALUES(NULL,901,'计算机',98);
INSERT INTO score(stu_id,c_name,grade)VALUES
(901,'英语',80),
(902,'计算机',65),
(902,'中文',88),
(903,'中文',95),
(904,'计算机',70),
(904,'英语',92),
(905,'英语',94),
(906,'计算机',90),
(906,'英语',85);
#查看数据
SELECT * FROM student;
#2.从student表查询所有学生的学号、姓名和院系信息
SELECT id,NAME,department FROM student;
#3.从student表中查询计算机系和英语系的学生的信息
SELECT * FROM student WHERE department='计算机系' || department='英语系';
#4.从student表中查询年龄18~22岁的学生信息
SELECT * FROM student WHERE birth>=1996 AND birth<=2002;
#5.查询student表中查询男、女各有多少人
SELECT sex,COUNT('人数') AS '人数' FROM student GROUP BY sex;
#6.查询student表中查询男、女各有多少人，并按照降序排列
SELECT sex,COUNT('人数') AS '人数' FROM student GROUP BY sex DESC;
#7.从student表中查询某系别总人数大于1的系名和数量
SELECT sex,COUNT(department)FROM student GROUP BY department DESC;
#8.从score表中查询每个科目的最高分
SELECT c_name,MAX(grade) FROM score GROUP BY c_name;
#9.计算每个学生的总成绩
SELECT stu_id,COUNT(c_name),SUM(grade) FROM score GROUP BY stu_id;
#10.计算每个考试科目的平均成绩
SELECT c_name,AVG(grade) FROM score GROUP BY c_name;
#11.将计算机考试成绩按从高到低排序
SELECT stu_id,grade FROM score WHERE c_name='计算机' ORDER BY grade DESC ;
#12.查询score表中stu_id不是902、904、906,且成绩大于80的信息
SELECT * FROM score WHERE stu_id NOT IN(902,904,906) AND grade>80;
#13.从student表中查询姓”王”，并且性别是男同学所在的系
SELECT NAME ,department FROM student WHERE sex='男' GROUP BY department;
#14.从student表中查询姓”张”，并且是单名的同学的信息
SELECT * FROM student WHERE NAME LIKE '张_';
#15.要求将student表中的数据格式化输出，格式为：xx的家庭住址是xx(使用字符串的函数)
SELECT CONCAT (NAME,'的家庭住址是',address)FROM student;
#16.将student表中名字有“王”的替换为“小王”(使用字符串的函数)
SELECT REPLACE (NAME,'王','小王')FROM student;
#17.要求查看student表中的姓名的字节数(使用字符串的函数)
SELECT NAME ,LENGTH(NAME) FROM student;
#18.查询score表中的查询前3条的数据
SELECT * FROM score LIMIT 3;
#19.查询score表中查询第4条到第6条的数据
SELECT * FROM score LIMIT 3 OFFSET 3
#20.计算student表中学生的年龄
SELECT NAME,YEAR(NOW())-birth AS '年龄' FROM student GROUP BY NAME;
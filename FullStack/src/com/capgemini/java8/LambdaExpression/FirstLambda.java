package com.capgemini.java8.LambdaExpression;
import java.io.File;
import java.io.FileFilter;

public class FirstLambda {

	public static void main(String[] args) {

		FileFilter filter = (File file) -> file.getName().endsWith(".java");

		File dir = new File("D:/tmp");
		File[] javaFilesList = dir.listFiles(filter);
		System.out.println("javaFiles:" + javaFilesList);
	}

}

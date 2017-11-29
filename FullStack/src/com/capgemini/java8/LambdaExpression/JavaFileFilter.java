package com.capgemini.java8.LambdaExpression;
import java.io.File;
import java.io.FileFilter;

public class JavaFileFilter implements FileFilter {

	public boolean accept(File file) {
		return file.getName().endsWith(".java");
	}

	public static void main(String[] args) {
		
		FileFilter fileFilter = new JavaFileFilter();
		File dir = new File("D:/tmp");
		File[] javaFiles = dir.listFiles(fileFilter);
		System.out.println("javaFiles:"+javaFiles);

	}

}

package com.capgemini.java8.LambdaExpression;
import java.io.File;
import java.io.FileFilter;

public class FileFilterUsingAnonymous {

	static FileFilter anonymousfileFilter = new FileFilter() {

		@Override
		public boolean accept(File file) {
			return file.getName().endsWith(".java");
		}
	};

	public static void main(String[] args) {
		File dir = new File("D:/tmp");
		File[] javaFilesList = dir.listFiles(anonymousfileFilter);
		System.out.println("javaFiles:" + javaFilesList);
	}

}

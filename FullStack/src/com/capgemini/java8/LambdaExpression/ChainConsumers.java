package com.capgemini.java8.LambdaExpression;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class ChainConsumers {

	public static void main(String[] args) {

		List<String> strings = Arrays.asList("one", "two", "three", "four", "five");

		List<String> result = new ArrayList<>();

		Consumer<String> lambdaString = (String) -> strings.listIterator();

		// Consumer<String> c1=System.out::println;

		Consumer<String> c2 = result::add;

		strings.forEach(lambdaString.andThen(c2));

		System.out.println("result" + result);
	}

}

package com.paqu;

import java.util.List;

import com.paqu.Paqu;

public interface IPaquDao {
	public void add(Paqu user);
	public void delete(int id);
	public void update(Paqu user);
	public Paqu load(int id);
	public Paqu load(String title2);
	public Paqu load1(String title2);
	public Paqu load2();
	public List<Paqu> loadb(String title3);
	public List<Paqu> load();
	public List<Paqu> load3();
	public List<Paqu> loadc(String classs);
}

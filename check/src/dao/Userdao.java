package dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import DUBtil.DBUtil;
import bean.*;
public class Userdao {
	
	/**public boolean register(Userbean userbean)
	{
		boolean flag=false;
		Connection conn=DBUtil.getConn();
		
			Statement state=null;    //Statement��������ִ�в��������ļ�SQL���
			String sql="insert into users(username,password,name,QQmail,phone) values('"+userbean.getUsername()+"','"+userbean.getPassword()+"','"+userbean.getName()+"','"+userbean.getQQmail()+"','"+userbean.getPhone()+"')";
		try
		{
			state=conn.createStatement();
			state.executeUpdate(sql);
			flag=true;
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			flag=false;
		}
		finally
		{
			DBUtil.close(state,conn);
		}
		return flag;
	}
	**/
	public boolean Checklogin(String username,String password)
	{
		boolean flag=false;
		Connection conn=DBUtil.getConn();
		Statement state=null;
		ResultSet rs=null;    //ResultSet�����ݿ����������ݱ�
		
		try
		{
			state=conn.createStatement();
			rs=state.executeQuery("select * from users where username='"+username+"'");
			if(rs.next())
			{
				if(rs.getString("password").equals(password))
				{

					flag=true;
					
				}
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		finally
		{
			DBUtil.close(rs,state,conn);
		}
		return flag;
	}
	public List<Userbean> getListAll(String key1) {
		List<Userbean> list=new ArrayList<Userbean>();//创建list集合，用于保持User对象
		Connection conn=DBUtil.getConn();//通过工具类直接调用getConnection方法获取jdbc连接。
		Statement state=null;
		ResultSet rs=null;
		try {
		String sql="select * from info where key1='"+key1+"'";
		state=conn.createStatement();
		rs=state.executeQuery(sql);
		while(rs.next()){
		Userbean userbean=new Userbean();//创建User对象用于保持从数据看查出来的数据
		userbean.setId(rs.getInt(1));
		System.out.println(rs.getString(1));
		userbean.setTitle1(rs.getString(2));
		System.out.println(rs.getString(2));
		userbean.setTitle2(rs.getString(3));
		userbean.setTitle3(rs.getString(4));
		userbean.setContent(rs.getString(5));
		userbean.setKey1(rs.getString(6));
		userbean.setAbstract1(rs.getString(7));
		userbean.setClasss(rs.getString(8));
		list.add(userbean);
		}
		} catch (Exception e) {

			e.printStackTrace();
		}
		finally
		{
			DBUtil.close(rs,state,conn);
		}
		return list;
		}
	public static List<Userbean> getListAll2() {
		List<Userbean> list=new ArrayList<Userbean>();//创建list集合，用于保持User对象
		Connection conn=DBUtil.getConn();//通过工具类直接调用getConnection方法获取jdbc连接。
		Statement state=null;
		ResultSet rs=null;
		try {
		System.out.println("111");
		String sql="select * from info";
		state=conn.createStatement();
		rs=state.executeQuery(sql);
		while(rs.next()){
		Userbean userbean=new Userbean();//创建User对象用于保持从数据看查出来的数据
		userbean.setId(rs.getInt(1));
		userbean.setTitle1(rs.getString(2));
		System.out.println(rs.getString(2));
		userbean.setTitle2(rs.getString(3));
		userbean.setTitle3(rs.getString(4));
		userbean.setContent(rs.getString(5));
		userbean.setKey1(rs.getString(6));
		userbean.setAbstract1(rs.getString(7));
		userbean.setClasss(rs.getString(8));
		list.add(userbean);
		}
		} catch (Exception e) {

			e.printStackTrace();
		}
		finally
		{
			DBUtil.close(rs,state,conn);
		}
		return list;
		}
	public  List<Userbean> getListAll3() {
		List<Userbean> list=new ArrayList<Userbean>();//创建list集合，用于保持User对象
		Connection conn=DBUtil.getConn();//通过工具类直接调用getConnection方法获取jdbc连接。
		Statement state=null;
		ResultSet rs=null;
		try {
		System.out.println("111");
		String sql="select * from info";
		state=conn.createStatement();
		rs=state.executeQuery(sql);
		while(rs.next()){
		Userbean userbean=new Userbean();//创建User对象用于保持从数据看查出来的数据
		userbean.setId(rs.getInt(1));
		userbean.setTitle1(rs.getString(2));
		System.out.println(rs.getString(2));
		userbean.setTitle2(rs.getString(3));
		userbean.setTitle3(rs.getString(4));
		userbean.setContent(rs.getString(5));
		userbean.setKey1(rs.getString(6));
		userbean.setAbstract1(rs.getString(7));
		userbean.setClasss(rs.getString(8));
		list.add(userbean);
		}
		} catch (Exception e) {

			e.printStackTrace();
		}
		finally
		{
			DBUtil.close(rs,state,conn);
		}
		return list;
		}
public static void add(Co co)
	{
		Connection conn=DBUtil.getConn();
		
		Statement state=null;    //Statement��������ִ�в��������ļ�SQL���

      String sql = "INSERT INTO info2  VALUES(null,'"+co.getNum()+"','"+co.getAddress()+"','"+co.getCo()+"',null,null)";
	try
	{
		state=conn.createStatement();
		state.executeUpdate(sql);
		
	}
	catch(Exception e)
	{
		e.printStackTrace();
		
	}
	finally
	{
		DBUtil.close(state,conn);
	}
		
	}
public List<Co> find_id(int id) {
	Connection conn=DBUtil.getConn();//通过工具类直接调用getConnection方法获取jdbc连接。
	Statement state=null;
	ResultSet rs=null;
	List<Co> petInformations = new ArrayList<Co>();
	try {
		String sql = "SELECT * FROM info2 where num= "+id;
	state=conn.createStatement();
	rs=state.executeQuery(sql);

	while(rs.next()){
		Co petInformation = new Co();
		petInformation.setId(rs.getInt("id"));				
		petInformation.setNum(rs.getInt("num"));
		petInformation.setCo(rs.getString("co"));	
		petInformation.setStart1(rs.getInt("start1"));				
		petInformation.setFinish1(rs.getInt("finish1"));
		petInformations.add(petInformation);
	}

	} catch (Exception e) {

		e.printStackTrace();
	}
	finally
	{
		DBUtil.close(rs,state,conn);
	}
	return petInformations;
}
public String find_content(int i) {
	Connection conn=DBUtil.getConn();//通过工具类直接调用getConnection方法获取jdbc连接。
	Statement state=null;
	ResultSet rs=null;
	Userbean petInformations = new Userbean();
	String content=null;

	try {
		String sql = "SELECT content FROM info WHERE id="+i+"";
	state=conn.createStatement();
	rs=state.executeQuery(sql);

	while(rs.next()){
		   petInformations.setContent(rs.getString("content"));
		   content=petInformations.getContent();
		   System.out.println("111111");

	}

	} catch (Exception e) {

		e.printStackTrace();
	}
	finally
	{
		DBUtil.close(rs,state,conn);
	}
	return content;
}
public  List<Co> getListAll4() {
	List<Co> petInformations = new ArrayList<Co>();

	Connection conn=DBUtil.getConn();//通过工具类直接调用getConnection方法获取jdbc连接。
	Statement state=null;
	ResultSet rs=null;
	try {
	String sql="select * from info2";
	state=conn.createStatement();
	rs=state.executeQuery(sql);
	while(rs.next()){
		Co petInformation = new Co();
		petInformation.setId(rs.getInt(1));	
		petInformation.setNum(rs.getInt(2));
		petInformation.setCo(rs.getString(4));	
		petInformations.add(petInformation);
	
	}
	} catch (Exception e) {

		e.printStackTrace();
	}
	finally
	{
		DBUtil.close(rs,state,conn);
	}
	return petInformations;

	}
public void update_position(int start,int end,int id)
{
	Connection conn=DBUtil.getConn();//通过工具类直接调用getConnection方法获取jdbc连接。
	Statement state=null;
	ResultSet rs=null;
	//tring copy="";
	//int i=explain.indexOf(copy);

	try {
		String sql = "update info2 set start1='"+start+"', finish1='"+end+"' where id='"+id+"' ";

	state=conn.createStatement();
	state.executeUpdate(sql);


	} catch (Exception e) {

		e.printStackTrace();
	}
	finally
	{
		DBUtil.close(rs,state,conn);
	}
	
}

}

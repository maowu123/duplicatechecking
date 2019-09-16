package DUBtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBUtil 
{
	public static String db_url="jdbc:mysql://localhost:3306/ttt?uerUnicode=true&characterEncoding=UTF-8";
	public static String db_user="root";
	public static String db_password="root";
	public static Connection getConn()
	{
		Connection conn=null;
		try
		{
			Class.forName("com.mysql.jdbc.Driver");  //�������ݿ�����
			conn=DriverManager.getConnection(db_url,db_user,db_password);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return conn;
	}
	public static void close(Statement state,Connection conn)//�ر�
	{
		if(state!=null)//�ж�
		{
			try
			{
				state.close();
			}
			catch(SQLException e)
			{
				e.printStackTrace();
			}
		}
		if(conn!=null)
		{
			try
			{
				conn.close();
			}
			catch(SQLException e)
			{
				 e.printStackTrace();
			}
		}
	}
	public static void close(ResultSet rs,Statement state,Connection conn)
	{
		if(rs!=null)
		{
			try
			{
				rs.close();
			}
			catch(SQLException e)
			{
				e.printStackTrace();
			}
		}
		if(state!=null)
			
		{
			try
			{
				state.close();
			}
			catch(SQLException e)
			{
				e.printStackTrace();
			}
		}
		if(conn!=null)
		{
			try
			{
				conn.close();
			}
			catch(SQLException e)
			{
				e.printStackTrace();
			}
		}
	}

}

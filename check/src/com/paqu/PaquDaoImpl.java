package com.paqu;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import com.paqu.DBUtil;
import com.paqu.PaquException;
import com.paqu.Paqu;

import sun.net.www.content.text.plain;

public class PaquDaoImpl implements IPaquDao {

	@Override
	public void add(Paqu paqu) {
		//获得链接对象
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select count(*) from info where title1 = ?";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, paqu.getTitle1());
			//接收结果集
			resultSet = preparedStatement.executeQuery();
			//遍历结果集
			while(resultSet.next()) {
				if (resultSet.getInt(1) > 0) {
					throw new PaquException("用户已存在") ;
				}
			}
			
			sql = "insert into info(title1,title2,title3,content,key1,abstract1,classs) values (?,?,?,?,?,?,?)";
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, paqu.getTitle1());
			preparedStatement.setString(2, paqu.getTitle2());
			preparedStatement.setString(3, paqu.getTitle3());
			preparedStatement.setString(4, paqu.getContent());
			preparedStatement.setString(5, paqu.getKey1());
			preparedStatement.setString(6, paqu.getAbstract1());
			preparedStatement.setString(7, paqu.getClasss());
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			//关闭资源
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		
	}

	@Override
	public void delete(int id) {
		Connection connection = DBUtil.getConnection();
		String sql = "delete from info where id = ?";
		PreparedStatement preparedStatement = null;
		
		try {
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setInt(1, id);
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		
	}
	//暂时没用
	@Override
	public void update(Paqu paqu) {
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "update info set password = ? , nickname=? where id = ?";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, paqu.getTitle1());
			preparedStatement.setString(2, paqu.getTitle2());
			preparedStatement.setInt(3, paqu.getId());
			preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
	}

	@Override
	public Paqu load(int id) {
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select * from info  where id = ?";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		Paqu paqu = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setInt(1, id);
			resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				paqu = new Paqu();
				paqu.setId(id);
				paqu.setTitle1(resultSet.getString("title1"));
				paqu.setTitle2(resultSet.getString("title2"));
				paqu.setTitle3(resultSet.getString("title3"));
				paqu.setContent(resultSet.getString("content"));
				paqu.setKey1(resultSet.getString("key1"));
				paqu.setAbstract1(resultSet.getString("abstract1"));
				paqu.setClasss(resultSet.getString("classs"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		return  paqu;
	}
	public Paqu load(String title2) {
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select DISTINCT classs from info";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		Paqu paqu = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, title2);
			resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				paqu = new Paqu();
				paqu.setId(resultSet.getInt("id"));
				paqu.setTitle1(resultSet.getString("title1"));
				paqu.setTitle2(resultSet.getString("title2"));
				paqu.setTitle3(resultSet.getString("title3"));
				paqu.setContent(resultSet.getString("content"));
				paqu.setKey1(resultSet.getString("key1"));
				paqu.setAbstract1(resultSet.getString("abstract1"));
				paqu.setClasss(resultSet.getString("classs"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		return  paqu;
	}
	public Paqu load2() {
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select DISTINCT classs from info";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		Paqu paqu = null;
		try {
			preparedStatement = connection.prepareStatement(sql);

			resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				paqu = new Paqu();
				paqu.setId(resultSet.getInt("id"));
				paqu.setTitle1(resultSet.getString("title1"));
				paqu.setTitle2(resultSet.getString("title2"));
				paqu.setTitle3(resultSet.getString("title3"));
				paqu.setContent(resultSet.getString("content"));
				paqu.setKey1(resultSet.getString("key1"));
				paqu.setAbstract1(resultSet.getString("abstract1"));
				paqu.setClasss(resultSet.getString("classs"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		return  paqu;
	}
	public Paqu load1(String classs) {
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select * from info  where classs = ?";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		Paqu paqu = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1, classs);
			resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				paqu = new Paqu();
				paqu.setId(resultSet.getInt("id"));
				paqu.setTitle1(resultSet.getString("title1"));
				paqu.setTitle2(resultSet.getString("title2"));
				paqu.setTitle3(resultSet.getString("title3"));
				paqu.setContent(resultSet.getString("content"));
				paqu.setKey1(resultSet.getString("key1"));
				paqu.setAbstract1(resultSet.getString("abstract1"));
				paqu.setClasss(classs);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		return  paqu;
	}

	@Override
	public List<Paqu> load() {
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select * from info ";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		//集合中只能放入user对象
		List<Paqu> paqus = new ArrayList<Paqu>();
		Paqu paqu = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				paqu = new Paqu();
				paqu.setId(resultSet.getInt("id"));
				paqu.setTitle1(resultSet.getString("title1"));
				paqu.setTitle2(resultSet.getString("title2"));
				paqu.setTitle3(resultSet.getString("title3"));
				paqu.setContent(resultSet.getString("content"));
				paqu.setKey1(resultSet.getString("key1"));
				paqu.setAbstract1(resultSet.getString("abstract1"));
				paqu.setClasss(resultSet.getString("classs"));
				paqus.add(paqu);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		return  paqus;
	}
	@Override
	public List<Paqu> load3() {
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select DISTINCT classs from info";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		//集合中只能放入user对象
		List<Paqu> paqus = new ArrayList<Paqu>();
		Paqu paqu = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				paqu = new Paqu();
				/*paqu.setId(resultSet.getInt("id"));
				paqu.setTitle1(resultSet.getString("title1"));
				paqu.setTitle2(resultSet.getString("title2"));
				paqu.setTitle3(resultSet.getString("title3"));
				paqu.setContent(resultSet.getString("content"));
				paqu.setKey1(resultSet.getString("key1"));
				paqu.setAbstract1(resultSet.getString("abstract1"));*/
				paqu.setClasss(resultSet.getString("classs"));
				paqus.add(paqu);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		return  paqus;
	}
	public List<Paqu> loadb(String title3) {
		// TODO 自动生成的方法存根
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select * from info where title3 like ?";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		//集合中只能放入user对象
		List<Paqu> paqus = new ArrayList<Paqu>();
		Paqu paqu = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1,"%"+title3+"%");
			resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				paqu = new Paqu();
				paqu.setId(resultSet.getInt("id"));
				paqu.setTitle1(resultSet.getString("title1"));
				paqu.setTitle2(resultSet.getString("title2"));
				paqu.setTitle3(resultSet.getString("title3"));
				paqu.setContent(resultSet.getString("content"));
				paqu.setKey1(resultSet.getString("key1"));
				paqu.setAbstract1(resultSet.getString("abstract1"));
				paqu.setClasss(resultSet.getString("classs"));
				paqus.add(paqu);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		return  paqus;
	}
	public List<Paqu> loadc(String classs) {
		// TODO 自动生成的方法存根
		Connection connection = DBUtil.getConnection();
		//准备sql语句
		String sql = "select * from info where classs = ?";
		//创建语句传输对象
		PreparedStatement preparedStatement = null;
		ResultSet resultSet = null;
		//集合中只能放入user对象
		List<Paqu> paqus = new ArrayList<Paqu>();
		Paqu paqu = null;
		try {
			preparedStatement = connection.prepareStatement(sql);
			preparedStatement.setString(1,classs);
			resultSet = preparedStatement.executeQuery();
			while(resultSet.next()) {
				paqu = new Paqu();
				paqu.setId(resultSet.getInt("id"));
				paqu.setTitle1(resultSet.getString("title1"));
				paqu.setTitle2(resultSet.getString("title2"));
				paqu.setTitle3(resultSet.getString("title3"));
				paqu.setContent(resultSet.getString("content"));
				paqu.setKey1(resultSet.getString("key1"));
				paqu.setAbstract1(resultSet.getString("abstract1"));
				paqu.setClasss(resultSet.getString("classs"));
				paqus.add(paqu);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			DBUtil.close(resultSet);
			DBUtil.close(preparedStatement);
			DBUtil.close(connection);
		}
		return  paqus;
	}
}
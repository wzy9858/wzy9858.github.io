package com.atguigu.ajax.app.dao;

import java.sql.Connection;
import java.sql.SQLException;

import javax.sql.DataSource;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class DBManager {

	private static DataSource dataSource;
	
	static{
		dataSource = new ComboPooledDataSource("ajaxApp"); 
	}
	
	public Connection getConnection(){
		Connection conn = null;
		
		if(dataSource != null)
			try {
				conn = dataSource.getConnection();
			} catch (SQLException e) {
				throw new RuntimeException(e);
			}
		
		return conn;
	}
	
	private DBManager(){}
	
	private static DBManager instance = new DBManager();

	public static DBManager getInstance() {
		return instance;
	}
}

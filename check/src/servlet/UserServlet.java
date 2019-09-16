package servlet;

import java.io.IOException;
import java.util.List;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.Userdao;
import bean.Userbean;
public class UserServlet extends BaseServlet {
	
	public void Login(HttpServletRequest request,HttpServletResponse response) throws IOException, ServletException
	{
		PrintWriter out=response.getWriter();
		String username=request.getParameter("username");
		String password=request.getParameter("password");
		Userdao userbean=new Userdao();
		
		if(userbean.Checklogin(username, password))
		{
			request.getSession().setAttribute("username", username);
			response.sendRedirect(request.getContextPath() + "/index.jsp");
			//response.sendRedirect:��ַ�ض���ҳ����ת��
			//request.getRequestDispatcher("/index.jsp").forward(request, response);
		}
		else 
		{
			
			response.sendRedirect(request.getContextPath() + "/loginfail.html");
			
		}
	}
	
	/**public void Register(HttpServletRequest request,HttpServletResponse response) throws IOException
	{
		PrintWriter out=response.getWriter();
		String username=request.getParameter("username");
		String password=request.getParameter("password");
		String name=request.getParameter("name");
		String QQmail=request.getParameter("QQmail");
		String phone=request.getParameter("phone");
		Userbean userbean=new Userbean();
		
		userbean.setUsername(username);
		userbean.setPhone(phone);
		userbean.setPassword(password);
		userbean.setName(name);
		userbean.setQQmail(QQmail);
		
		Userdao userdao=new Userdao();
		boolean i=userdao.register(userbean);
		if(i)
		{
			response.sendRedirect(request.getContextPath() + "/registersuc.html");
		}
		else
		{
			out.print("<script>alert('ע��ʧ�ܣ�')</script>");
			response.sendRedirect(request.getContextPath() + "/register.html");

		}
	}
	**/
	public void Look(HttpServletRequest request,HttpServletResponse response) throws IOException, ServletException
	{
		String key1=request.getParameter("key1");
		Userdao userdao=new Userdao();
		List<Userbean> list=userdao.getListAll(key1);
		request.getSession().setAttribute("list", list);
		response.sendRedirect(request.getContextPath() + "/temp2.jsp");
	}
	public void show(HttpServletRequest request,HttpServletResponse response) throws IOException
	{
		PrintWriter out= response.getWriter();
		String username=request.getParameter("username");
		String password=request.getParameter("password");
		out.print("<script>alert('"+username+"')</script>");
		out.print("<script>alert('"+password+"')</script>");
		
	}
}

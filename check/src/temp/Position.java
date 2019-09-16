package temp;
import java.util.List;
import dao.*;
import bean.*;
public class Position {
	public static void main(String[] args) {
		Userdao d=new Userdao();
		List<Co> cops = d.getListAll4();
		for (Co cop : cops) {
			String explain = d.find_content(cop.getNum());
			System.out.println(explain);
            int start=strStr(explain,cop.getCo());
            
            //System.out.println(cop.getId()+":"+explain.charAt(start)+"---"+explain.charAt(start+cop.getCo().length()));
            //System.out.println(cop.getId()+":"+start);
            d.update_position(start,start+cop.getCo().length()-1 , cop.getId());
            
		}
	}

	public static Integer strStr(String str, String target) {
	    str=str+"#";
		int length = str.length();
		int targetLength = target.length();
		if (targetLength > length) {
			return -1;
		}
		if (targetLength == 0) {
			return 0;
		}
		int num = length - targetLength;
		for (int i = 0; i < num; i++) {
			if (target.charAt(0) != str.charAt(i)) {
				while (++i <= num && str.charAt(i) != target.charAt(0))
					;
			}
			if (i < num) {
				int j = i + 1;
				
				int end = i + targetLength;
				
				for (int k = 1; j < end && str.charAt(j) == target.charAt(k); j++, k++)
					;
			
				if (j == end) {
					
					return i;
				}
			}
		}
		return -1;
	}

}


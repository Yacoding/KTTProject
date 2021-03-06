package com.ktproject.forexpic.service;

import java.util.List;
import java.util.Map;

import com.ktproject.forexpic.model.ForexNewsPicVO;
import com.ktproject.forexpic.model.ForexPicDetailVO;
import com.ktproject.forexpic.model.ForexPicVO;

public interface ForexPicService {
     
	 /**
	  * 查询所有的相关信息
	  * @return
	  */
	 Map<String,Object> queryAllForexPic(final Map map); 
	 
	 /**
	  * 通过ID做相应的搜索.
	  */
	 List<ForexPicDetailVO> queryImageUrlById(final String id);
	 
	 /**
	   * 外汇信息图汇信息查询.
	   */
	 Map<String,Object> queryForexNewsPic(final  Map<String,Object> map);
}

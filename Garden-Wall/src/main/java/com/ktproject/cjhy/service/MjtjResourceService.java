/**
 * 创建于: 2014-4-24 上午10:43:27<br>
 * 所属项目:财汇网
 * 文件名称:MjtjResourceService.java
 * 作者:vteamdell0723
 * 版权信息: 版权所有 © 2001-2013 科投股份有限公司
 */

package com.ktproject.cjhy.service;

import java.util.Map;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

/**
 * 类功能描述：
 * MjtjResourceService.java
 * @author vteamdell0723
 * @version 0.1.0
 * @history 2014-4-24 vteamdell0723 创建MjtjResourceService.java
 */
public interface MjtjResourceService {
        
	   /**
	    * 名家推荐模块代码.
	    * @param file
	    * @param map
	    */
	   public  void  addMjtjResource(final CommonsMultipartFile file , final  Map<String,Object> map , final String  serverPath); 
	   
	   /**
	    * 外汇名家推荐模块.
	    * @param file
	    * @param map
	    * @param serverPath
	    */
	   public  void  addHshyMjtjResource(final CommonsMultipartFile file , final  Map<String,Object> map , final String  serverPath); 
}

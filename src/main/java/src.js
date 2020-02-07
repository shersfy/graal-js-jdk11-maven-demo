/**
 * 类相关操作的工具
 * @author: pengy
 * @date 2020-02-06
 */
var ClassUtil = {
		/**
		 * 调用方法。指定类名、方法名、参数调用方法
		 * @param className 类名字符串
		 * @param methodName 方法名字符串
		 * @param args 参数列表
		 * @returns 执行方法的返回值
		 */
		invoke: function(className, methodName, args){
			args = typeof(args)==="undefined"||args==null?[]:args;
			var obj = Reflect.construct(eval(className), []);
			var res = Reflect.apply(eval("obj."+methodName ), obj, args)
			return res;
		}
}

/**
 * 基础类型
 * @author: pengy
 * @date 2020-02-06
 */
class BaseType {
	
	constructor(){
		this.uniqueKeys = "source_system,fid";
	}

	/**
	 * 获取物理表名
	 */
	getTableName(){
		var name = this.convertToUnderline(this.constructor.name);
		return name;
	}
	
	/**
	 * 获取
	 */
	getUniqueKeys(){
		return this.uniqueKeys;
	}

	convertToUnderline(str) {
		if(str==null){
			return null;
		}
		str = str.replace(/([A-Z])/g,"_$1").toLowerCase();
		str = str.substring(1);
		return str;
	}
}

/**
 * 物料信息
 * @author: pengy
 * @date 2020-02-06
 */
class MaterialInfo extends BaseType{

	constructor(){
		super();
		this.uniqueKeys = "source_system,fid,type";
	}
}
/**
 * 客商基本信息
 * @author: pengy
 * @date 2020-02-06
 */
class CsspBaseInfo extends BaseType{
	constructor(){
		super();
		this.uniqueKeys="source_system,fid,entity_type";
	}
}

console.log(ClassUtil.invoke("BaseType", "getTableName"));
console.log(ClassUtil.invoke("MaterialInfo", "getTableName"));
console.log(ClassUtil.invoke("MaterialInfo", "getUniqueKeys"));
console.log(ClassUtil.invoke("CsspBaseInfo", "getUniqueKeys"));
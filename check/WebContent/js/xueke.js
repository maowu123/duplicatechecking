// JavaScript Document
var num1; 
var num2;
var yiji=["数学史","数论","代数学","代数几何学","拓扑学","数学分析","非标准分析","常微分方程","偏微分方程","动力系统","积分方程","计算数学","概率论","数理统计学","应用统计数学","运筹学"];
var erji=[["数理逻辑与数学基础"]
,["数论"]
,["代数学"]
,['几何学']
,['拓扑学']
,['数学分析']
,['函数论']
,['常微分方程']
,["偏微分方程"]
,['动力系统']
,['泛函分析']
,['计算数学']
,['概率论']
,['数理统计学']
,['应用统计数学']
,['运筹学']];
var sanji=[[["演绎逻辑学(亦称符号逻辑学)","证明论(亦称元数学)","递归论","模型论","公理集合论","数学基础","数理逻辑与数学基础其他学科"]]
,[["初等数论","解析数论","代数数论","超越数论","丢番图逼近","数的几何","概率数论","计算数论","数论其他学科"]]
,[['线性代数','群论','域论','李群','李代数','Kac-Moody代数','环论','模论','格论','泛代数理论','范畴论','同调代数','代数K理论','微分代数','代数编码理论','代数学其他学科']]
,[['几何学基础','欧氏几何学','非欧几何学(包括黎曼几何学等)','球面几何学','向量和张量分析','仿射几何学','射影几何学','微分几何学','分数维几何','计算几何学','几何学其他学科']]
,[['点集拓扑学','代数拓扑学','同伦论','低维拓扑学','同调论','维数论','格上拓扑学','纤维丛论','几何拓扑学','奇点理论','微分拓扑学','拓扑学其他学科']]
,[['微分学','积分学','级数论','数学分析其他学科']]
,[['实变函数论','单复变函数论','多复变函数论','函数逼近论','调和分析','复流形','特殊函数论','函数论其他学科']]
,[['定性理论','稳定性理论','解析理论','常微分方程其他学科']]
,[['椭圆型偏微分方程','双曲型偏微分方程','抛物型偏微分方程','非线性偏微分方程','偏微分方程其他学科']]
,[['微分动力系统','拓扑动力系统','复动力系统','动力系统其他学科']]
,[['线性算子理论','变分法','拓扑线性空间','希尔伯特空间','函数空间','巴拿赫空间','算子代数','测度与积分','广义函数论','非线性泛函分析','泛函分析其他学科']]
,[['插值法与逼近论','常微分方程数值解','偏微分方程数值解','积分方程数值解','数值代数','连续问题离散化方法','随机数值实验','误差分析','计算数学其他学科']]
,[['几何概率','概率分布','极限理论','随机过程','马尔可夫过程','随机分析','鞅论','应用概率论','概率论其他学科']]
,[['抽样理论','假设检验','非参数统计','方差分析','相关回归分析','统计推断','贝叶斯统计','试验设计','多元分析','统计判决理论','时间序列分析','数理统计学其他学科']]
,[['统计质量控制','可靠性数学','保险数学','统计模拟','应用统计数学其他学科']]
,[['线性规划','非线性规划','动态规划','组合最优化','参数规划','整数规划','随机规划','排队论','对策论(亦称博奕论)','库存论','决策论','搜索论','图论','统筹论','最优化','运筹学其他学科']]];
$(function(){
    for(var i=0;i<yiji.length;i++){
    $("#yiji").append("<option>"+yiji[i]+"</option>");
    }
    $("#yiji").change(function(){
        $("#erji").children().not(":eq(0)").remove();
        num1=$(this).children("option:selected").index();
        var aerji=erji[num1-1];
        for(var j=0;j<aerji.length;j++){
        $("#erji").append("<option>"+aerji[j]+"</option>");
        }
    $("#erji").change(function(){
        $("#sanji").children().not(":eq(0)").remove();
        num2=$(this).children("option:selected").index();
        var sanji1=sanji[num1-1][num2-1];
        for( var z=0;z<sanji1.length;z++){
        $("#sanji").append("<option>"+sanji1[z]+"</option>");
        }
        });
        });
    });
/************************************
 ジャンケンゲームを作る（関数なし）
*************************************/
//＜ジャンケンの手の番号を設定＞
//＜「const」で変数宣言することで、define的な定数の使い方をする＞
const GU=1;
const CHOKI=2;
const PA=3;
//GUという変数を宣言、1を格納する
//CHOKIという変数を宣言、2を格納する
//PAという変数を宣言、3を格納する

//＜ジャンケンの入力ダイアログボックスを表示＞
let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー'); //1:グー、2:チョキ、3:パーと、対応する変数と組み合わせて表示する。\nは改行コードなので、文字として扱う
hum = parseInt(hum,10);     //入力文字を整数に変換（第2引数は「基数」を設定。基数は2進数・16進数の数字のところをさす。ここでは10進数を指定する）

//＜入力値のチェック＞
//if文を使う。自分の入力した手が定数値と一致しなかった（入力値が不適切な）場合
if(hum!=1&&hum!=2&&hum!=3){
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます');  //アラートで再読み込みの文章を表示
}else{
var com;
com=Math.floor(Math.random()*3)+1;
}
//elseで、自分の入力した手が適切だった場合の処理を行う↓
//コンピュータの手を決める
//変数「com」を宣言。Math.randomに最大数をかける→Math.floorで整数値を返す（小数点を出さないようにする）。+1で、1～3の整数を決める。値を直接「com」に代入する。

//＜コンピュータの手の名前＞
var comHandName=0;
switch(com){
    case GU:
        comHandName='グー';
        break;
    case CHOKI:
        comHandName='チョキ';
        break;
    case PA:
        comHandName='パー';
        break;

}
//コンピュータの手を文字列として格納する変数「comHandName」を宣言。初期化のために0を代入
//switch文で、コンピュータの手を判定する
//GUならグーの文字列をcomHandNameに格納
//CHOKIならチョキの文字列をcomHandNameに格納
//PAならパーの文字列をcomHandNameに格納
   
//＜結果の判定＞
//結果（勝敗）を格納する変数「msgResult」を宣言。初期化のために0を代入
var msgResult=0;
//if文での判定。人間とコンピュータの手が一緒なら…
if(hum==com){
    msgResult = '結果は「あいこ」。';        //結果の変数にあいこの文字列を格納
}else if(hum == GU && com == CHOKI || hum == CHOKI && com == PA || hum == PA && com == GU){
    msgResult='勝ったぞ、やったね';
}else{
    msgResult='負けた、ズコー'; 
}
   
//＜最終的な結果の表示＞
msgResult = msgResult + 'コンピュータの出した手は「' + comHandName + '」だったよ';  //msgResult変数に、msgResult+コンピュータの出した手をcomHandNameと組み合わせて格納する
alert(msgResult);   //アラートで、msgResultを表示させる
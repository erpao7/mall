<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>111</li>
      <li>112</li>
      <li>113</li>
      <li>114</li>
      <li>115</li>
      <li>116</li>
      <li>117</li>
      <li>118</li>
      <li>119</li>
      <li>1110</li>
      <li>1111</li>
      <li>1112</li>
      <li>1113</li>
      <li>1114</li>
      <li>1115</li>
      <li>1116</li>
      <li>1117</li>
      <li>1118</li>
      <li>1119</li>
      <li>1120</li>
      <li>1121</li>
      <li>1122</li>
      <li>1123</li>
      <li>1124</li>
      <li>1125</li>
      <li>1126</li>
      <li>1127</li>
      <li>1128</li>
      <li>1129</li>
      <li>1130</li>
      <li>1131</li>
      <li>1132</li>
      <li>1133</li>
      <li>1134</li>
      <li>1135</li>
      <li>1136</li>
      <li>1137</li>
      <li>1138</li>
      <li>1139</li>
      <li>1140</li>
      <li>1141</li>
      <li>1142</li>
      <li>1143</li>
      <li>1144</li>
      <li>1145</li>
      <li>1146</li>
      <li>1147</li>
      <li>1148</li>
      <li>1149</li>
      <li>1150</li>
      <li>1151</li>
      <li>1152</li>
      <li>1153</li>
      <li>1154</li>
      <li>1155</li>
      <li>1156</li>
      <li>1157</li>
      <li>1158</li>
      <li>1159</li>
      <li>1160</li>
      <li>1161</li>
      <li>1162</li>
      <li>1163</li>
      <li>1164</li>
      <li>1165</li>
      <li>1166</li>
      <li>1167</li>
      <li>1168</li>
      <li>1169</li>
      <li>1170</li>
      <li>1171</li>
      <li>1172</li>
      <li>1173</li>
      <li>1174</li>
      <li>1175</li>
      <li>1176</li>
      <li>1177</li>
      <li>1178</li>
      <li>1179</li>
      <li>1180</li>
      <li>1181</li>
      <li>1182</li>
      <li>1183</li>
      <li>1184</li>
      <li>1185</li>
      <li>1186</li>
      <li>1187</li>
      <li>1188</li>
      <li>1189</li>
      <li>1190</li>
      <li>1191</li>
      <li>1192</li>
      <li>1193</li>
      <li>1194</li>
      <li>1195</li>
      <li>1196</li>
      <li>1197</li>
      <li>1198</li>
      <li>1199</li>
      <li>11100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // probeType:3,
      // pullUpLoad:true,
      click:true
    });
    // this.scroll.on('scroll',(position)=>{
    //   console.log(position);
    // })
    // this.scroll.on('pullingUp',()=>{
    //   console.log('上拉加载更多');
    // })
  },
};
</script>

<style scoped>
.wrapper {
  /* height: 150px; */
  background-color: pink;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
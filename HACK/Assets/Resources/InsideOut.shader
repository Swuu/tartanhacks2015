Shader "Custom/InsideOut" {
	Properties {
		_MainTex ("Base (RGB)", 2D) = "white" {}
	}
	SubShader {
      
      Tags { "RenderType" = "Opaque" }
      
      Cull Off
      
      CGPROGRAM
      
      #pragma surface surf Lambert vertex:vert
      
      void vert(inout appdata_full v)
      {
           v.normal.xyz = v.normal * -1;
      }
       
      struct Input {
           float4 color : COLOR;
      };
       
      void surf (Input IN, inout SurfaceOutput o) {
           o.Albedo = 1;
      }
       
      ENDCG
       
    }
	
	FallBack "Diffuse"
}

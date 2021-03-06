﻿#pragma strict

var duration : float= 2.0;

function Update ()
{
	// argument for cosine
	var phi : float = Time.time / duration * 2 * Mathf.PI;
	// get cosine and transform from -1..1 to 0..1 range
	var amplitude : float = Mathf.Cos( phi ) * 8.0 + 0.5;
	// set light color
	light.intensity = amplitude;
}
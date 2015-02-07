#pragma strict

var target : Transform;
var yDistance = 3;
var zDistance = -5;

function Update ()
{
	transform.position = target.position + target.TransformDirection (Vector3 (0, yDistance, zDistance));
	transform.rotation = target.rotation;
}
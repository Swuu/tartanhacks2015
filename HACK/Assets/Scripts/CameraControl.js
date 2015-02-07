#pragma strict

var target : Transform;

function Update ()
{
	transform.position = target.position + target.TransformDirection (Vector3 (-1.0, -0.3, -1.7));
	transform.eulerAngles = target.eulerAngles + target.TransformVector (Vector3 (5.0, 15.0, 0.0));
}
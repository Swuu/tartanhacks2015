#pragma strict

var target : Transform;

function Update ()
{
	transform.position = target.position + Vector3 (0, 0, 20);
}
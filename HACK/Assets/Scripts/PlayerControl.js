#pragma strict

var moveSpeed = 2;
var rotationSpeed = 250;

function Update ()
{
	transform.Translate (Vector3.forward * Time.deltaTime * moveSpeed);
	
	if (Input.GetKey (KeyCode.LeftArrow))
		transform.Rotate (Vector3.back * Time.deltaTime * rotationSpeed);
	if (Input.GetKey (KeyCode.RightArrow))
		transform.Rotate (Vector3.forward * Time.deltaTime * rotationSpeed);
}
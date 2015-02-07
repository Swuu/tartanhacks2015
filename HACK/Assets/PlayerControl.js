#pragma strict

var moveSpeed = 3;
var rotationSpeed = 250;
//var jumpHeight = 8;

function Update ()
{
	//Handle forward movement
	transform.Translate (Vector3.forward * Time.deltaTime * moveSpeed);
	
	//Handle rotation around pipe
	if (Input.GetKey (KeyCode.LeftArrow))
		transform.Rotate (Vector3.forward * Time.deltaTime * rotationSpeed);
	if (Input.GetKey (KeyCode.RightArrow))
		transform.Rotate (Vector3.back * Time.deltaTime * rotationSpeed);

	/*Handle jumping
	if (Input.GetKeyDown (KeyCode.UpArrow))
	{
		cube = transform.Find("PlayerCenter/PlayerRotate/Player");
		cube.rigidbody.velocity.y = jumpHeight;
	}*/
}
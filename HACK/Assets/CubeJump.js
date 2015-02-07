#pragma strict

var jumpHeight = 2;

function Update ()
{	
	rigidbody.AddRelativeForce (Vector3.down);
	//Handle jumping
	if (Input.GetKeyDown (KeyCode.UpArrow))
	{
		rigidbody.velocity.y = jumpHeight;
	}
}
#pragma strict

private var airTime = 0.25;
private var jumpSpeed = 3;
private var startJumpTime = 0.0;
private var jumping = false;

function Update ()
{
	if (Input.GetKeyDown (KeyCode.UpArrow) && !jumping)
	{
		jumping = true;
		startJumpTime = Time.time;
	}
	
	if (jumping)
	{
		if (Time.time < startJumpTime + airTime)
			transform.Translate (Vector3.up * Time.deltaTime * jumpSpeed);
		else if (Time.time < startJumpTime + 2 * airTime)
			transform.Translate (Vector3.down * Time.deltaTime * jumpSpeed);
		else
		{
			jumping = false;
		}
	}
}
#pragma strict

//movement variables
private var startMoveTime = 0.0;

//jump variables
private var jumping = false;
private var accel = -16.0;
private var vel = 7.0;
private var startY = 0.0;

//slide variables
private var sliding = false;
private var startAngle = 0.0;
private var startZ = 0.0;

function Update ()
{
	//jumping
	if (Input.GetKeyDown (KeyCode.UpArrow) && !jumping && !sliding)
	{
		jumping = true;
		startMoveTime = Time.time;
		startY = transform.localPosition.y;
	}
	if (jumping)
	{
		if (transform.localPosition.y >= startY)
			transform.localPosition.y = startY + vel * (Time.time - startMoveTime) + accel * (Time.time - startMoveTime) * (Time.time - startMoveTime);
		else
		{
			transform.localPosition.y = startY;
			jumping = false;
		}
	}
	
	//sliding
	if (Input.GetKeyDown (KeyCode.DownArrow) && !sliding && !jumping)
	{
		sliding = true;
		startMoveTime = Time.time;
		startY = transform.localPosition.y;
		startZ = transform.localPosition.z;
	}
	if (sliding)
	{
		if ((transform.GetChild(0).localEulerAngles.x <= 360.0 && transform.GetChild(0).localEulerAngles.x >= 270.0) || transform.GetChild(0).localEulerAngles.x <= 1.0)
		{
			var t = Time.time - startMoveTime;
			transform.localPosition.y = startY + (startAngle - 90.0 + (10.0 * t - 9.4868) * (10.0 * t - 9.4868)) / -270.0;
			transform.localPosition.z = startZ + (startAngle - 90.0 + (10.0 * t - 9.4868) * (10.0 * t - 9.4868)) / -60.0;
			transform.GetChild(0).localEulerAngles.x = startAngle - 90.0 + (10.0 * t - 9.4868) * (10.0 * t - 9.4868);
		}
		else
		{
			transform.localPosition.y = startY;
			transform.localPosition.z = startZ;
			transform.GetChild(0).localEulerAngles.x = startAngle;
			sliding = false;
		}
	}
}
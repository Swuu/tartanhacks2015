#pragma strict

function Update() {
		// Move the object to the right relative to the camera 1 unit/second.
		transform.Translate(Vector3.forward * Time.deltaTime);
	}
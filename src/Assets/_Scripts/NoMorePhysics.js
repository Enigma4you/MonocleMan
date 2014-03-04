
function OnTriggerEnter(other : Collider) {
	if (other.tag == "BigCube"){
		yield WaitForSeconds (5);

		if (other.GetComponent(Rigidbody)){
			if (other.gameObject != null) {
				Destroy (other.rigidbody);
			}
		}
	}
}
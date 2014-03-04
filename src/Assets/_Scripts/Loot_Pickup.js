
function OnTriggerEnter(other : Collider) {
	if (other.tag == "Player"){
		Debug.Log("A");
		Destroy(gameObject.transform.parent.gameObject);
	}
}
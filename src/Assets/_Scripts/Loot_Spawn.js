private var nextSpawn : float = 0;
private var spawnDelay : float = 3;
public var sand : GameObject;
private var newSand : GameObject;
private var randomNumber : float = 0;

function Update () {
	if (Time.time > nextSpawn && Time.time < 50){
		nextSpawn = Time.time + spawnDelay;
		newSand = Instantiate (sand, gameObject.transform.position, Quaternion.identity);

	}
	if (Input.GetKeyDown(KeyCode.P)){
		Time.timeScale = 5;
		}
	if (Input.GetKeyDown(KeyCode.O)){
		Time.timeScale = 1;
		}
}
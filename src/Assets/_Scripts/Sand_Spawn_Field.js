private var nextSpawn : float = 0;
public var spawnDelay : float = 1;
public var sand : GameObject;
public var sandWithTop : GameObject;
public var sand_invis : GameObject;
private var newSand : GameObject;
private var newSand2 : GameObject;
public var sandSpawned : int[];
private var topRenderer : MeshRenderer;
public var rowNumber : int = 0;
public var heightAlongRow : int[];



function Update () {
	if (Time.time > nextSpawn){
		nextSpawn = Time.time + spawnDelay;

	for (i=0; i<7; i++){
		sandSpawned[i]++;
		if (sandSpawned[i] < heightAlongRow[i]){
			newSand = Instantiate (sand, Vector3(i * 4.1 - 12, 21, rowNumber * 4.1 - 12), Quaternion.identity);
		}
		else if (sandSpawned[i] == heightAlongRow[i]){
			newSand = Instantiate (sandWithTop, Vector3(i * 4.1 - 12,  21, rowNumber * 4.1 - 12), Quaternion.identity);
			newSand.BroadcastMessage("SetColor", Vector3(.7, .6, .5));
			}
		}
	}
	
}
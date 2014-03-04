private var nextSpawn : float = 0;
public var spawnDelay : float = 1;
public var sand : GameObject;
public var sandWithTop : GameObject;
public var sand_invis : GameObject;
public var sandWithTrampoline : GameObject;
private var newSand : GameObject;
private var newSand2 : GameObject;
public var sandSpawned : int[];
private var topRenderer : MeshRenderer;
public var rowNumber : int = 0;
public var stackInfo : String[];

function Update () {
	if (Time.time > nextSpawn){
		nextSpawn = Time.time + spawnDelay;

		for (i=0; i<7; i++){
			sandSpawned[i]++;
			if (sandSpawned[i] < stackInfo[i].Length){
				if (stackInfo[i][sandSpawned[i]] == '1'){
					newSand = Instantiate (sand, Vector3(i * 4.1 - 12, 21, rowNumber * 4.1 - 12), Quaternion.identity);
				}
				else if (stackInfo[i][sandSpawned[i]] == '0'){
					newSand = Instantiate (sand_invis, Vector3(i * 4.1 - 12, 21, rowNumber * 4.1 - 12), Quaternion.identity);
				}
				else if (stackInfo[i][sandSpawned[i]] == '2'){
					newSand = Instantiate (sandWithTop, Vector3(i * 4.1 - 12, 21, rowNumber * 4.1 - 12), Quaternion.identity);
					newSand.BroadcastMessage("SetColor", Vector3(.7, .6, .5));
				}
				else if (stackInfo[i][sandSpawned[i]] == '3'){
					newSand = Instantiate (sandWithTrampoline, Vector3(i * 4.1 - 12, 21, rowNumber * 4.1 - 12), Quaternion.identity);
				}
			}
		}
	}
	
}
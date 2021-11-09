export type trainingClass = {
  id: number;
  name: string;
  desc: string;
  image: string;
  cat: string;
  inst: string;
  len: string;
  level: string;
  product: string;
  sortOrder: number;
  explicit: boolean;
  createdAt: string;
  updatedAt: string;
};

function isClassList(obj: any): obj is [trainingClass] {
  return Array.isArray(obj as [trainingClass]);
}

async function getClasses(): Promise<trainingClass[] | false> {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/jasonbyrne/881459829d342a2ddd495165fb815c2d/raw/e0fb08e2fa2a8288a124b1a187b86ecba35d2cb9/echelon-videos-example.json"
    );
    const classData = await response.json();
    if (isClassList(classData.items))
      return classData.items.sort(
        (a: trainingClass, b: trainingClass) => a.sortOrder - b.sortOrder
      );
    else return false;
  } catch (err) {
    return false;
  }
}

export { getClasses };

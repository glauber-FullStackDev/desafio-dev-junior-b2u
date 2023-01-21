import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'
/*
  The path module provides several useful features
  for accessing and interacting with the file system.
*/

export default (app: Express): void => {
  const router = Router()
  app.use('/api/v1/', router)
  /*
    The fs.readdirSync() method is used to synchronously
    read the contents of a given directory.
  */
  readdirSync(path.join(__dirname, '/../routes')).map(async file => {
    /*
      taking out test files and .map files to pass the router to the production files
      .map -> source map is a JSOn-based mapping format that creates a relationship
      between a minified file and its sources.
    */
    if (!file.includes('.test.') && !file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
